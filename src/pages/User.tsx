
import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const User = () => {
    const users = useAppSelector(selectUsers);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
                <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto">Users</h1>
    
                <AddUserModal />
            </div>

            <div className="space-y-5 mt-5">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default User;