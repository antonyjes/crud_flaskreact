import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "./Layout";
import { Button } from "@/components/ui/button";
import { File, PlusCircle } from "lucide-react";

const Home = () => {
    return(
        <Layout title={"Dashboard"}>
            <Tabs variant="default" defaultValue="active">
                <div className="flex">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <Button size="sm" variant="outline" className="h-7 gap-1">
                            <File className="h-4 w-4" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                        </Button>
                        <Button size="sm" className="h-7 gap-1">
                            <PlusCircle className="h-4 w-4" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Task
                            </span>
                        </Button>
                    </div>
                </div>
            </Tabs>
        </Layout>
    )
}

export default Home;