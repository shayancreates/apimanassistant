APIman is an intelligent support chatbot specifically designed for APIhub users, combining AI-powered assistance with an automated ticket escalation system when human intervention is needed.

chatbot link: https://shayancreates-apiiman1-main-ritki9.streamlit.app/Chatbot

Developed by: Socrates Team

For: APIhUB Hackathon

Tech Stack

Next.js

Tailwind CSS v4

Clerk

Python

LangChain

Streamlit

Groq AI Model

MongoDB

Features
Core Features

1. Domain Specific Chatbot

Answers only APIhub-related queries

Rejects/redirects off-topic questions

2. Knowledge base includes-

API documentation and descriptions

Authentication processes (API keys, tokens)

Rate limits, pricing, and plans

Error handling guidance

Data types and response structures

3. Automatic Ticket Generation

Creates structured support tickets when bot can't resolve an issue

Ticket forwarding to admin via whatsapp automation

4. Realtime Dashboard for Open and Closed Tickets and API Analytics for each API

More Features
Admin Whatsapp notifications
Admin dashboard for ticket management
Auto escalation timer for unaddressed tickets
Context aware conversations
Structured ticket submission prompts
Ticket waiting time counter

Future Prospects-

1. Voice Automation
2. Multilingual Chatbot
3. Online Code Playground
4. Low code connection to APIS
5. More Scalable and FAst

Env file for frontend in Next js must contain-

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=
```

Install node modules

```
npm i
```

run the frontend

```
npm run dev
```

Python and streamlit in chabotlogic folder

Download requirements.txt file first

```
pip install -r requirements.txt

```

Env file should contain

```
MONGODB_URI=
GROQ_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_NUMBER=
ADMIN_PHONE_NUMBER=
SUPPORT_PHONE_NUMBER=
```

run the main.py file

```
streamlit run main.py
```
