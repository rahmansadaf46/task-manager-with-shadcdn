import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addUser } from "@/redux/features/user/userSlice"
import { useAppDispatch } from "@/redux/hooks"
import type { IUser } from "@/types"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddUserModal() {
    const [open, setOpen] = useState(false)
    const form = useForm();
    const dispatch = useAppDispatch();


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        dispatch(addUser(data as IUser));
        setOpen(false)
        form.reset()
        // Here you would typically dispatch an action to add the task
        // For example: dispatch(addTask(data));
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogDescription className="sr-only">Fill up this form</DialogDescription>
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form className="space-y-3 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ''} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            {/* <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose> */}
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>

                </Form>

            </DialogContent>

        </Dialog>
    )
}
