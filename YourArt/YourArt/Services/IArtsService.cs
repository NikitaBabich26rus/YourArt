using System.Collections.Generic;
using System.Threading.Tasks;

namespace YourArt.Services
{
    public interface IArtsService
    {
        Task<Arts> GetFirstArt();

        Task<Arts> GetArtById(int id);

        Task<IEnumerable<Arts>> GetPageContent(int currentPage, int amountArtsOnPage);

    }
}
