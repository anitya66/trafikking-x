import { motion } from "framer-motion";

import { useProfile } from "../hooks/useProfile";

import ProfileHeader from "../components/ProfileHeader";
import AvatarCard from "../components/AvatarCard";
import PersonalInfoCard from "../components/PersonalInfoCard";
import SecurityCard from "../components/SecurityCard";


export default function ProfilePage() {

  const {
    data: profile,
    isLoading,
  } = useProfile();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  return (

    <motion.div

      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      className="space-y-8"

    >

      <ProfileHeader profile={profile} />

      <div className="grid gap-6 lg:grid-cols-3">

        <AvatarCard profile={profile} />

        <div className="space-y-6 lg:col-span-2">

          <PersonalInfoCard profile={profile} />

          <SecurityCard />

        </div>

      </div>

      

    </motion.div>

  );

}