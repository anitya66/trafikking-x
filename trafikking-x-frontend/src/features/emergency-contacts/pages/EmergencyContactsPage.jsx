import { useMemo, useState } from "react";

import {
  Plus,
  HeartHandshake,
} from "lucide-react";

import PageHeader from "@/shared/components/PageHeader";
import SearchInput from "@/shared/components/SearchInput";
import EmptyState from "@/shared/components/EmptyState";
import LoadingState from "@/shared/components/LoadingState";
import ConfirmDialog from "@/shared/components/ConfirmDialog";

import {
  useDeleteEmergencyContact,
} from "..";

import { Button } from "@/components/ui/button";

import {
  useEmergencyContacts,
} from "..";

import ContactDialog from "../components/ContactDialog";
import ContactCard from "../components/ContactCard";

export default function EmergencyContactsPage() {

  const {
    data: contacts = [],
    isLoading,
    isError,
  } = useEmergencyContacts();

  const [search, setSearch] = useState("");

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [selectedContact, setSelectedContact] =
    useState(null);

  const deleteContact = useDeleteEmergencyContact();

const [deleteDialogOpen, setDeleteDialogOpen] =
  useState(false);  

  const filteredContacts = useMemo(() => {

    return contacts.filter((contact) =>

      contact.contactName
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      contact.contactPhone
        .includes(search) ||

      contact.relationship
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  }, [

    contacts,

    search,

  ]);

  function handleAdd() {

    setSelectedContact(null);

    setDialogOpen(true);

  }

  function handleEdit(contact) {

    setSelectedContact(contact);

    setDialogOpen(true);

  }

 function handleDelete(contact) {

  setSelectedContact(contact);

  setDeleteDialogOpen(true);

}

async function confirmDelete() {

  if (!selectedContact) return;

  await deleteContact.mutateAsync(
    selectedContact.id
  );

  setDeleteDialogOpen(false);

  setSelectedContact(null);

}

  if (isLoading) {

    return <LoadingState cards={4} />;

  }

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12 text-center">

  <HeartHandshake className="mx-auto mb-5 h-14 w-14 text-red-500" />

  <h3 className="text-xl font-bold">

    Unable To Load Contacts

  </h3>

  <p className="mt-3 text-muted-foreground">

    Please refresh the page and try again.

  </p>

</div>

    );

  }

  return (

    <div className="space-y-8">

      <PageHeader

        title="Emergency Contacts"

        description="Manage the people responders can contact during emergencies."

        actions={

  <div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row lg:items-center">

    <SearchInput
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      placeholder="Search by name, phone or relationship..."
      className="lg:w-80"
    />

    <Button
      size="lg"
      onClick={handleAdd}
    >

      <Plus className="mr-2 h-4 w-4" />

      Add Emergency Contact

    </Button>

  </div>

}

      />
            {filteredContacts.length === 0 ? (

        <EmptyState
          icon={
            <HeartHandshake className="h-14 w-14 text-muted-foreground" />
          }
          title="No Trusted Contacts Yet"
          description="Add family members or trusted friends who should be notified immediately during an emergency."
          action={
            <Button onClick={handleAdd}>

              <Plus className="mr-2 h-4 w-4" />

              Create First Contact

            </Button>
          }
        />

      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredContacts.map((contact) => (

            <ContactCard
              key={contact.id}
              contact={contact}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}

      <ContactDialog

        open={dialogOpen}

        onOpenChange={setDialogOpen}

        mode={
          selectedContact
            ? "edit"
            : "create"
        }

        contact={selectedContact}

      />

      <ConfirmDialog

  open={deleteDialogOpen}

  onOpenChange={setDeleteDialogOpen}

  title="Delete Emergency Contact"

  description={
    selectedContact
      ? `Are you sure you want to delete ${selectedContact.contactName}?`
      : ""
  }

  confirmText="Delete"

  loading={deleteContact.isPending}

  onConfirm={confirmDelete}

/>

    </div>

  );

}