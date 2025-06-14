import { JSX } from 'react'
import { FaGoogle, FaFacebookF, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface IconsProps {
    icon: JSX.Element
    link: string
}

const Login = () => {
    const iconsAPi: IconsProps[] = [
        { icon: <FaGoogle />, link: '' },
        { icon: <FaFacebookF />, link: '' },
        { icon: <FaGithub />, link: '' },
    ]

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#bbf7d0]">
            <div className="bg-white container rounded-md p-6 w-5/6 lg:w-[450px] h-auto text-white">
                <div className="space-y-2 text-black text-center">
                    <h1 className='text-2xl'>Bem vindo de novo!</h1>
                    <p className='text-base text-gray-500'>Entre com suas credenciais.</p>

                    <div className="flex justify-center gap-4 mt-4">
                        {iconsAPi.map((item, index) => (
                            <div
                                key={index}
                                className="w-2/3 h-12 bg-white text-black flex items-center justify-center rounded-md shadow-md cursor-pointer"
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                    <hr className='mt-6' />

                    <div className='space-y-4 py-3'>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />

                        <Label htmlFor="password">Senha</Label>
                        <div className="relative">
                            <span className='absolute right-4 top-2.5'><FaEye /></span>
                            <Input type="password" id="password" placeholder="***********" />
                        </div>

                        <Button className='w-full cursor-pointer p-5'>Entrar</Button>

                        <span>
                            Não possui conta?{' '} 
                            <Link href="/register" className="text-blue-600 hover:underline">
                                Cadastre-se
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
