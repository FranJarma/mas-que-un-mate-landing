"use client"

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface ClientContactFormProps {
  trigger: React.ReactNode
}

export function ClientContactForm({ trigger }: ClientContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-mate-cream border-mate-secondary">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-mate-primary tracking-wide">
            QUIERO PARTICIPAR
          </DialogTitle>
          <DialogDescription className="text-mate-black/70">
            Dejanos tus datos y nos pondremos en contacto para coordinar tu participacion en el podcast.
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mate-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-mate-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-mate-primary font-semibold">Gracias por tu interes</p>
            <p className="text-mate-black/60 text-sm mt-1">Te contactaremos pronto</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="client-name" className="text-mate-black">
                Nombre completo
              </Label>
              <Input
                id="client-name"
                name="name"
                required
                placeholder="Tu nombre"
                className="bg-white border-mate-secondary focus:border-mate-primary focus:ring-mate-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client-email" className="text-mate-black">
                Email
              </Label>
              <Input
                id="client-email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="bg-white border-mate-secondary focus:border-mate-primary focus:ring-mate-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client-phone" className="text-mate-black">
                Telefono / WhatsApp
              </Label>
              <Input
                id="client-phone"
                name="phone"
                type="tel"
                placeholder="+54 9 11 1234-5678"
                className="bg-white border-mate-secondary focus:border-mate-primary focus:ring-mate-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client-topic" className="text-mate-black">
                Sobre que te gustaria hablar?
              </Label>
              <Textarea
                id="client-topic"
                name="topic"
                required
                placeholder="Contanos brevemente tu historia o el tema que te gustaria charlar..."
                rows={3}
                className="bg-white border-mate-secondary focus:border-mate-primary focus:ring-mate-primary resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="client-social" className="text-mate-black">
                Redes sociales (opcional)
              </Label>
              <Input
                id="client-social"
                name="social"
                placeholder="@tu_usuario en Instagram"
                className="bg-white border-mate-secondary focus:border-mate-primary focus:ring-mate-primary"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-mate-primary hover:bg-mate-brown-light text-mate-cream font-semibold py-3"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
