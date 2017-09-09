using ohjeezdogpark.Models;
using System.Collections.Generic;

namespace ohjeezdogpark.Controllers
{
    public interface IContactsRepository
    {
        void AddNewContact(Contacts contactNew);
        void EditContact(Contacts contactEdit);
        Contacts GetSingleContact(int id);
        IEnumerable<Contacts> GetAllContacts();
        void DeleteSingleContact(int id);
    }
}