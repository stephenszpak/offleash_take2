using ohjeezdogpark.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ohjeezdogpark.Models;
using System.Data.Entity.Migrations;

namespace ohjeezdogpark.DAL.Repositories
{
    public class ContactsRepository : IContactsRepository
    {
        readonly ApplicationDbContext _context;

        public ContactsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void AddNewContact(Contacts contactNew)
        {
            _context.Contacts.Add(contactNew);
            _context.SaveChanges();
        }

        public void DeleteSingleContact(int id)
        {
            var deleteThis = _context.Contacts.Find(id);

            _context.Contacts.Remove(deleteThis);
            _context.SaveChanges();
        }

        public void EditContact(Contacts contactEdit)
        {
            var contact = GetSingleContact(contactEdit.Id);

            contact.DogName = contactEdit.DogName;
            contact.OwnerFirstName = contactEdit.OwnerFirstName;
            contact.OwnerLastName = contactEdit.OwnerLastName;
            contact.OwnerFirstName = contactEdit.OwnerFirstName;
            contact.PhoneNumber = contactEdit.PhoneNumber;

            _context.Contacts.AddOrUpdate(contact);
            _context.SaveChanges();
        }

        public IEnumerable<Contacts> GetAllContacts()
        {
            return _context.Contacts;
        }

        public Contacts GetSingleContact(int id)
        {
            return _context.Contacts.Find(id);
        }
    }
}