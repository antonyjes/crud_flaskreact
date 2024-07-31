import { Button } from "@/components/ui/button";
import { File, Menu, Package2, PlusCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import ModalTask from "./Modal";

const Layout = ({ children, title }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Button
              variant="ghost"
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Button>
            <Button
              variant="ghost"
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Button
                  variant="ghost"
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Button>
                <Button
                  variant="ghost"
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <div className="mx-auto grid w-full gap-2 grid-cols-2">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-7 gap-1">
                <File className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button size="sm" className="h-7 gap-1" onClick={() => setShowModal(true)}>
                <PlusCircle className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Task
                </span>
              </Button>
            </div>
          </div>
          {children}
        </main>
      </div>
      {
        showModal && (
          <ModalTask 
            showModal={showModal}
            setShowModal={setShowModal}
            operation="Create"
          />
        )
      }
    </>
  );
};

export default Layout;
