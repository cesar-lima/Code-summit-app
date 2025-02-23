'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
	name: z.string().min(2, 'Digite seu nome completo'),
	email: z.string().email('E-mail inválido'),
})

type subscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(subscriptionSchema),
	})

	function onSubscribe(data: subscriptionSchema) {
		console.log(data)
	}

	return (
		<div className="flex gap-5 items-stretch flex-col md:flex-row">
			<div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
				<div className="flex items-center justify-between">
					<h2 className="font-heading font-semibold text-gray-200">
						Sobre o evento
					</h2>
					<span className="text-purple font-semibold text-xs flex items-center gap-2">
						<Radio className="size-5" />
						AO VIVO
					</span>
				</div>

				<p className="text-gray-300 leading-relaxed text-sm md:text-base">
					Um evento feito por e para pessoas desenvolvedoras apaixonadas por
					criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar
					nas tendências mais recentes em desenvolvimento de software,
					arquitetura de sistemas e tecnologias emergentes, com palestras,
					workshops e hackathons.
					<br />
					<br />
					Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
				</p>
			</div>

			<form
				onSubmit={handleSubmit(onSubscribe)}
				className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
			>
				<h2 className="font-heading font-semibold text-gray-200">
					Sobre o evento
				</h2>

				<div className="space-y-3">
					<div className="space-y-2">
						<InputRoot>
							<InputIcon>
								<User />
							</InputIcon>
							<InputField
								type="text"
								placeholder="Nome Completo"
								{...register('name')}
							/>
						</InputRoot>

						{errors.name && (
							<p className="text-danger text-xs font-semibold">
								{errors.name.message}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<InputRoot>
							<InputIcon>
								<Mail />
							</InputIcon>
							<InputField
								type="email"
								placeholder="E-mail"
								{...register('email')}
							/>
						</InputRoot>

						{errors.email && (
							<p className="text-danger text-xs font-semibold">
								{errors.email.message}
							</p>
						)}
					</div>

					<Button type="submit">
						Confirmar
						<ArrowRight />
					</Button>
				</div>
			</form>
		</div>
	)
}
