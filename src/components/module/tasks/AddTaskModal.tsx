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
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"

export function AddTaskModal() {
    const form = useForm();


    const onSubmit = (data) => {
        console.log(data);
        // Here you would typically dispatch an action to add the task
        // For example: dispatch(addTask(data));
    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button>Add Task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogDescription className="sr-only">Fill up this form</DialogDescription>
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value || ''} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} value={field.value || ''} />
                                            {/* <Input  /> */}
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
            </form>
        </Dialog>
    )
}
