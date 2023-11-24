import type { Metadata } from 'next'
import { Nunito } from 'next/font/google';
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import RentModal from './components/modals/RentModal';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

export const metadata: Metadata = {
  title: 'Travel Nest',
  description: 'Travel With Your Home',
}

const font = Nunito({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider></ToasterProvider>
        <RentModal></RentModal>
        <LoginModal></LoginModal>
        <RegisterModal></RegisterModal>
        <Navbar currentUser={currentUser}></Navbar>
        {children}
      </body>
    </html>
  )
}
