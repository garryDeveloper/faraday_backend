1. Organización
Company (Tenant)
id
name
taxId
email
phone
timezone
status
createdAt

Una empresa cliente del sistema.

Relaciones

Company
    ├── Users
    ├── Teams
    ├── Contacts
    ├── Lists
    ├── Campaigns
    └── Pipelines
User
id
companyId
firstName
lastName
email
passwordHash
role
status
lastLogin
createdAt

Roles

Admin

Supervisor

Seller
Team
id
companyId
name
description
leaderId
TeamMember
teamId
userId

Muchos vendedores pueden pertenecer a varios equipos.

2. CRM
Contact

Esta es la entidad principal.

id
companyId

firstName
lastName

company
jobTitle

phone
mobile
email

website

country
province
city

address

notes

status

createdAt
updatedAt

No conoce campañas.

ContactTag
id
companyId
name
color
ContactTagRelation
contactId
tagId

Ejemplo

VIP

Nuevo

Cliente

Proveedor

Lead Facebook
ContactCustomField

Permite agregar campos sin modificar la base.

id
companyId
name
type
ContactCustomValue
contactId
fieldId
value
3. Listas
ContactList
id
companyId

name

description

createdBy
createdAt
ContactListItem
listId

contactId

Muchos a muchos.

4. Campañas
Campaign
id
companyId

name

description

type

status

startDate

endDate

script

createdBy

Tipos

Ventas

Cobranza

Encuesta

Renovación

Cross Selling
CampaignList
campaignId

listId

Una campaña puede usar varias listas.

CampaignTeam
campaignId

teamId
CampaignAssignmentRule
campaignId

strategy

maxContacts

priority

Estrategias

Manual

Round Robin

Balanceado

Shared Queue
5. Participación del contacto

Esta probablemente sea la tabla más importante del sistema.

CampaignContact
id

campaignId

contactId

assignedUserId

status

priority

score

attempts

lastInteraction

nextInteraction

createdAt

Estados

Nuevo

Pendiente

No contesta

Interesado

Seguimiento

Propuesta

Ganado

Perdido

No volver a llamar
6. Actividades

Aquí vive todo el historial.

Activity
id

campaignContactId

type

performedBy

performedAt

description

Tipos

Call

WhatsApp

Email

SMS

Meeting

Task

Note
7. Llamadas
Call
id

activityId

direction

duration

recordingUrl

result

transcript

summary

Result

Answered

Busy

No Answer

Voicemail

Failed
8. WhatsApp
WhatsAppConversation
id

campaignContactId

phone

status

startedAt
WhatsAppMessage
id

conversationId

direction

messageType

templateName

text

mediaUrl

status

metaMessageId

sentAt

deliveredAt

readAt
9. Email
EmailMessage
id

activityId

subject

body

status

opened

clicked
10. Tareas
Task
id

campaignContactId

assignedUserId

title

description

dueDate

status

priority
11. Notas
Note
id

campaignContactId

userId

text

createdAt
12. Oportunidades

Si el lead avanza.

Opportunity
id

contactId

pipelineId

stageId

assignedUserId

title

amount

probability

expectedCloseDate

status
Pipeline
id

companyId

name
PipelineStage
id

pipelineId

name

position

color

Ejemplo

Lead

Contactado

Interesado

Propuesta

Negociación

Ganado
13. Automatizaciones

Muy interesante para un portfolio.

Automation
id

companyId

name

enabled
AutomationTrigger
automationId

type

Ejemplo

No Answer

Message Received

Call Finished

Tag Added

Task Completed
AutomationAction
automationId

type

configuration

Ejemplo

Enviar WhatsApp

Crear tarea

Asignar vendedor

Enviar Email

Mover Pipeline
14. Auditoría
AuditLog
id

companyId

userId

entity

entityId

action

oldValue

newValue

createdAt
15. Archivos
Attachment
id

activityId

name

url

mimeType

size
Relaciones
Company
│
├── Users
│      └── Teams
│
├── Contacts
│      ├── Tags
│      ├── CustomFields
│      └── Lists
│
├── Campaigns
│      ├── Lists
│      ├── Teams
│      ├── AssignmentRules
│      └── CampaignContacts
│               │
│               ├── Activities
│               │      ├── Calls
│               │      ├── WhatsApp
│               │      ├── Emails
│               │      ├── Notes
│               │      └── Tasks
│               │
│               └── Opportunity
│
├── Pipelines
│
├── Automations
│
└── AuditLogs