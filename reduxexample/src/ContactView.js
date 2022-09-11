import React from 'react'

export default function ContactView({contact, removeContact}) {
  return (
    <div>
        {contact.name}, {contact.email} 
        <button type="button" onClick={() => removeContact(contact.email)}>Delete</button> 
    </div>
  )
}
