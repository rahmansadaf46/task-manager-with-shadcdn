import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectFilter, selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);


    const dispatch = useAppDispatch()

    console.log(tasks, filter);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto">Task</h1>
                <Tabs defaultValue={filter}>
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger onClick={() => dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>

                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div className="space-y-5 mt-5">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Tasks;