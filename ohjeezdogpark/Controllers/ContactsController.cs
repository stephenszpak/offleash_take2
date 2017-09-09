using Microsoft.AspNet.Identity;
using ohjeezdogpark.Models;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ohjeezdogpark.Controllers
{
    [Authorize]
    public class ContactsController : ApiController
    {
        private readonly IContactsRepository _contactsRepository;
        private readonly ApplicationUserManager _userManager;

        private new ApplicationUser User => _userManager.FindById(base.User.Identity.GetUserId());

        public ContactsController(IContactsRepository contactsRepository, ApplicationUserManager userManager)
        {
            _contactsRepository = contactsRepository;
            _userManager = userManager;
        }

        [HttpPost]
        [Route("api/contact")]
        public void AddNewContact(Contacts contactNew)
        {
            var contact = new Contacts
            {
                DogName = contactNew.DogName,
                OwnerFirstName = contactNew.OwnerFirstName,
                OwnerLastName = contactNew.OwnerLastName,
                PhoneNumber = contactNew.PhoneNumber
            };

            _contactsRepository.AddNewContact(contact);
        }

        [HttpGet]
        [Route("api/contact")]
        public IEnumerable<Contacts> GetAllRooms()
        {
            return _contactsRepository.GetAllContacts();
        }
    }
}
