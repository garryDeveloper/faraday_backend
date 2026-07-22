import Company from '#models/company'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const company = await Company.create({
      name: 'Faraday',
      timezone: 'America/Argentina/Buenos_Aires',
      status: 'active',
    })

    await User.create({
      companyId: company.id,
      firstName: 'Admin',
      lastName: 'Faraday',
      email: 'admin@faraday.com',
      passwordHash: 'admin123',
      role: 'admin',
      status: 'active',
    })
  }
}
