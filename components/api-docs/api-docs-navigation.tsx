"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

export function ApiDocsNavigation() {
  const [activeSection, setActiveSection] = useState("getting-started")
  const [expandedSections, setExpandedSections] = useState(["getting-started", "voice-agents", "conversations", "webhooks"])

  const navigationItems = [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        { id: "introduction", title: "Introduction" },
        { id: "authentication", title: "Authentication" },
        { id: "base-url", title: "Base URL" }
      ]
    },
    {
      id: "voice-agents",
      title: "Voice Agents",
      items: [
        { id: "create-agent", title: "Create Voice Agent" },
        { id: "list-agents", title: "List Agents" },
        { id: "update-agent", title: "Update Agent" },
        { id: "delete-agent", title: "Delete Agent" }
      ]
    },
    {
      id: "conversations",
      title: "Conversations",
      items: [
        { id: "start-conversation", title: "Start Conversation" },
        { id: "get-conversation", title: "Get Conversation History" },
        { id: "end-conversation", title: "End Conversation" },
        { id: "conversation-metrics", title: "Conversation Metrics" }
      ]
    },
    {
      id: "webhooks",
      title: "Webhooks",
      items: [
        { id: "create-webhook", title: "Create Webhook" },
        { id: "webhook-events", title: "Webhook Events" },
        { id: "webhook-security", title: "Webhook Security" },
        { id: "error-handling", title: "Error Handling" }
      ]
    }
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <nav className="w-80 bg-white/5 backdrop-blur-sm border-r border-white/10 min-h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-white font-semibold text-lg mb-6">API Documentation</h2>
        
        <div className="space-y-2">
          {navigationItems.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                <span className="font-medium">{section.title}</span>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <div className="ml-4 space-y-1">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left p-2 text-sm rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? "text-purple-300 bg-purple-600/20 border-l-2 border-purple-500"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}