"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function ContactModal() {
    return (
        <Dialog>
            <DialogTrigger>Contact Us</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-purple-800">For additional details or inquiries, please reach out:</DialogTitle>
                <DialogDescription className="text-purple-600">
                    <p>Shlok Panchal, Co-director of MedSprint: panchs10@mcmaster.ca</p>
                    <p>Liam Berry, Co-director of MedSprint: berryl7@mcmaster.ca</p>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}