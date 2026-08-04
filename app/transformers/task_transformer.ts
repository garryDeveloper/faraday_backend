import type Task from '#models/task'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class TaskTransformer extends BaseTransformer<Task> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'title',
        'description',
        'dueDate',
        'status',
        'priority',
        'campaignContactId',
        'assignedUserId',
      ]),
      campaignContact: this.resource.campaignContact
        ? {
            id: this.resource.campaignContact.id,
            status: this.resource.campaignContact.status,
            campaign: this.resource.campaignContact.campaign
              ? {
                  id: this.resource.campaignContact.campaign.id,
                  name: this.resource.campaignContact.campaign.name,
                }
              : null,
            contact: this.resource.campaignContact.contact
              ? {
                  id: this.resource.campaignContact.contact.id,
                  firstName: this.resource.campaignContact.contact.firstName,
                  lastName: this.resource.campaignContact.contact.lastName,
                  email: this.resource.campaignContact.contact.email,
                  mobile: this.resource.campaignContact.contact.mobile,
                }
              : null,
          }
        : null,
      assignedUser: this.resource.assignedUser
        ? {
            id: this.resource.assignedUser.id,
            firstName: this.resource.assignedUser.firstName,
            lastName: this.resource.assignedUser.lastName,
            email: this.resource.assignedUser.email,
          }
        : null,
    }
  }
}
