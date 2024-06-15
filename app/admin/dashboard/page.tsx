import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addProduct } from '@/actions/admin';

type Props = {}

const page = async (props: Props) => {
    const session = await getServerSession(authOptions);
    console.log("%c Line:12 🍤 session", "color:#3f7cff", session);
    if (!session?.user?.isAdmin) {
        redirect("/dashboard");
    }
    return (
        <div className=''>
            <h1 className='text-2xl text-center'>Admin Dashboard</h1>
            <div className='product justify-items-center	'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Add Product</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Product</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                              <form className="my-8" action={addProduct}>

                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Price
                                </Label>
                                <Input
                                    id="username"

                                    name="price"
                                    defaultValue="200"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Image Link
                                </Label>
                                <Input
                                    id="username"
                                    name="image"
                                    defaultValue="Url"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Category
                                </Label>
                                <Select>
           
                                        <select  name="category" required  >
                                            <option  value="shirts">Shirts</option>
                                            <option value="pents">Pents</option>
                                            <option value="shoes">Shoes</option>
                                            <option value="watches">Watches</option>
                                        </select>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button  type="submit">Save</Button>
                        </DialogFooter>
                </form>

                    </DialogContent>
                </Dialog>
                </div>

        </div>
    )
}

export default page