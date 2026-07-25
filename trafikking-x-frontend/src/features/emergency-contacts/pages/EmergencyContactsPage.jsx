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

      <div className="py-20 text-center text-red-500">

        Failed to load emergency contacts.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <PageHeader

        title="Emergency Contacts"

        description="Manage the people responders can contact during emergencies."

        actions={

          <div className="flex items-center gap-3">

            <SearchInput

              value={search}

              onChange={(e) =>
                setSearch(e.target.value)
              }

              placeholder="Search contact..."

            />

            <Button onClick={handleAdd}>

              <Plus className="mr-2 h-4 w-4" />

              Add Contact

            </Button>

          </div>

        }

      />
            {filteredContacts.length === 0 ? (

        <EmptyState
          icon={
            <HeartHandshake className="h-14 w-14 text-muted-foreground" />
          }
          title="No Emergency Contacts"
          description="Add trusted people so emergency responders can contact them when needed."
          action={
            <Button onClick={handleAdd}>

              <Plus className="mr-2 h-4 w-4" />

              Add Contact

            </Button>
          }
        />

      ) : (

        <div className="grid gap-6 lg:grid-cols-2">

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