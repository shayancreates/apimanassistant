import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export default async function ChatbotPage() {
    const { userId, redirectToSignIn } = await auth();

    if (!userId) {
        return redirectToSignIn();
    }


    redirect('https://shayancreates-apiiman1-main-ritki9.streamlit.app/Chatbot');
}
