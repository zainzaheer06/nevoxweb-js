"use client"

import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function ApiDocsContent() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, language = "json", id }: { code: string; language?: string; id: string }) => (
    <div className="relative group">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={() => copyToClipboard(code, id)}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200"
        >
          {copiedCode === id ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
      <pre className="bg-black/50 border border-white/10 rounded-xl p-6 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  )

  const ParameterTable = ({ parameters }: { parameters: Array<{ name: string; type: string; required?: boolean; description: string }> }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-3 text-gray-300 font-semibold">Parameter</th>
            <th className="text-left p-3 text-gray-300 font-semibold">Type</th>
            <th className="text-left p-3 text-gray-300 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => (
            <tr key={index} className="border-b border-white/5">
              <td className="p-3">
                <code className="text-purple-300 font-mono text-sm">{param.name}</code>
                {param.required && (
                  <span className="ml-2 text-xs text-red-400">required</span>
                )}
              </td>
              <td className="p-3">
                <code className="text-cyan-300 font-mono text-sm">{param.type}</code>
              </td>
              <td className="p-3 text-gray-400 text-sm">{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <main className="flex-1 p-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Getting Started */}
        <section id="getting-started" className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Getting Started</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to the AI Voice Agent API documentation. Our API allows you to integrate AI-powered voice interactions into your applications.
          </p>
          
          <div className="p-6 bg-purple-600/10 border border-purple-500/30 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">Base URL</h3>
            <code className="text-purple-300 font-mono">https://api.nevoxai.com/v1</code>
          </div>
        </section>

        {/* Authentication */}
        <section id="authentication" className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Authentication</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            All API requests require authentication using an API key in the header.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Authentication Header</h3>
            <CodeBlock 
              id="auth-header"
              code="Authorization: Bearer YOUR_API_KEY"
              language="http"
            />
          </div>
        </section>

        {/* Voice Agents */}
        <section id="voice-agents" className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Voice Agents</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Create and manage AI voice agents for your applications.
          </p>

          {/* Create Voice Agent */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">Create Voice Agent</h3>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm font-mono rounded-lg">POST</span>
              <code className="text-gray-400 font-mono">/agents</code>
            </div>

            <CodeBlock 
              id="create-agent"
              code={`{
  "name": "Customer Support Agent",
  "language": "en-US",
  "voice_type": "female",
  "personality": "professional",
  "custom_responses": {
    "greeting": "Hello, how can I help you today?",
    "farewell": "Thank you for your time. Have a great day!"
  }
}`}
            />

            <h4 className="text-lg font-semibold text-white mt-6">Parameters</h4>
            <ParameterTable 
              parameters={[
                { name: "name", type: "string", required: true, description: "Name of the voice agent" },
                { name: "language", type: "string", description: "Language code (default: en-US)" },
                { name: "voice_type", type: "string", description: "Voice type (male/female)" },
                { name: "personality", type: "string", description: "Agent personality trait" },
                { name: "custom_responses", type: "object", description: "Custom response templates" }
              ]}
            />

            <h4 className="text-lg font-semibold text-white mt-6">Response</h4>
            <p className="text-gray-400 mb-3">Success Response</p>
            <CodeBlock 
              id="create-agent-response"
              code={`{
  "agent_id": "agt_123456",
  "name": "Customer Support Agent",
  "status": "active",
  "created_at": "2024-01-01T12:00:00Z"
}`}
            />
          </div>
        </section>

        {/* Conversations */}
        <section id="conversations" className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Conversations</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Manage voice conversations between AI agents and users. Track interactions, get transcripts, and analyze conversation metrics.
          </p>

          {/* Start Conversation */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">Start Conversation</h3>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm font-mono rounded-lg">POST</span>
              <code className="text-gray-400 font-mono">/conversations</code>
            </div>

            <CodeBlock 
              id="start-conversation"
              code={`{
  "agent_id": "agt_123456",
  "user_id": "usr_789012",
  "language": "en-US",
  "initial_context": {
    "customer_name": "John Doe",
    "previous_interaction": "Product Inquiry"
  },
  "settings": {
    "voice_speed": 1.0,
    "voice_pitch": "medium",
    "recording_enabled": true
  }
}`}
            />
          </div>

          {/* Get Conversation History */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">Get Conversation History</h3>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm font-mono rounded-lg">GET</span>
              <code className="text-gray-400 font-mono">/conversations/{"{conversation_id}"}</code>
            </div>
          </div>

          {/* End Conversation */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">End Conversation</h3>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm font-mono rounded-lg">POST</span>
              <code className="text-gray-400 font-mono">/conversations/{"{conversation_id}"}/end</code>
            </div>
          </div>
        </section>

        {/* Webhooks */}
        <section id="webhooks" className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Webhooks</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Set up webhooks to receive real-time notifications about conversation events and agent activities.
          </p>

          {/* Create Webhook */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-semibold text-white">Create Webhook</h3>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm font-mono rounded-lg">POST</span>
              <code className="text-gray-400 font-mono">/webhooks</code>
            </div>

            <CodeBlock 
              id="create-webhook"
              code={`{
  "url": "https://your-domain.com/webhook",
  "events": [
    "conversation.started",
    "conversation.ended",
    "message.received",
    "agent.handoff"
  ],
  "secret": "whsec_123456789",
  "description": "Production webhook"
}`}
            />
          </div>

          {/* Example Webhook Events */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Example Webhook Events</h3>
            <p className="text-gray-400">Conversation Started Event</p>
            <CodeBlock 
              id="webhook-event"
              code={`{
  "event": "conversation.started",
  "created_at": "2024-01-01T12:00:00Z",
  "data": {
    "conversation_id": "conv_123456",
    "agent_id": "agt_123456",
    "user_id": "usr_789012"
  }
}`}
            />
          </div>

          {/* Webhook Security */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Webhook Security</h3>
            <p className="text-gray-400 mb-3">Signature Verification (Python)</p>
            <CodeBlock 
              id="webhook-security"
              language="python"
              code={`import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected = hmac.new(
        secret.encode('utf-8'),
        payload.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(expected, signature)`}
            />
          </div>

          {/* List Available Events */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">List Available Events</h3>
            <div className="space-y-3">
              {[
                { event: "conversation.started", description: "New conversation initiated" },
                { event: "conversation.ended", description: "Conversation completed" },
                { event: "message.received", description: "New message in conversation" },
                { event: "agent.handoff", description: "Conversation transferred to human agent" },
                { event: "error.occurred", description: "Error during conversation" }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <code className="text-purple-300 font-mono">{item.event}</code>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Error Handling */}
        <section id="error-handling" className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Error Handling</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The API uses standard HTTP response codes to indicate success or failure of requests.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Error Response</h3>
            <CodeBlock 
              id="error-response"
              code={`{
  "error": {
    "code": "webhook_error",
    "message": "Failed to deliver webhook",
    "type": "delivery_failure",
    "retry_count": 3,
    "next_retry": "2024-01-01T12:30:00Z"
  }
}`}
            />
          </div>
        </section>
      </motion.div>
    </main>
  )
}