"use client";

import { JSX, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useIsMobile from '../hooks/useIsMobile';

const Register = () => {
    const [isVisibility, setVisibility] = useState<boolean>(true);
    const isMobile = useIsMobile();

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#bbf7d0]">
            <div className={`bg-white container rounded-md p-6 ${isMobile ? "w-5/6" : "w-[450px]"} h-auto text-white`}>

                <div className="space-y-2 text-black text-center">
                    <h1 className='text-2xl'>Bem vindo!</h1>
                    <p className='text-base text-gray-500'>Comece cadastrando suas credenciais.</p>

                    <div className='space-y-4 py-3'>
                        <Label htmlFor="name">Nome</Label>
                        <Input type="text" id="name" placeholder="Nome" />

                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />

                        <Label htmlFor="password">Senha</Label>
                        <div className="relative">
                            <span onClick={() => setVisibility(!isVisibility)} className='absolute right-4 top-2.5 cursor-pointer'>
                                {isVisibility ? <FaEye /> : <FaEyeSlash />}
                            </span>
                            <Input type={isVisibility ? "text" : "password"} id="password" placeholder='Digite sua senha' />
                        </div>

                        <Button className='w-full cursor-pointer p-5'>Entrar</Button>

                        <span>
                            Já possui conta?{' '}
                            <Link href="/login" className="text-blue-600 hover:underline">
                                Entre agora mesmo
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
