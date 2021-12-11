using System.Collections.Generic;
using System.Threading.Tasks;

namespace YourArt.Repositories
{
    public interface IArtsRepository
    {
        Task<Arts> GetFirstArt();

        Task<Arts> GetArtById(int id);

        Task<List<Arts>> GetPageContent(int currentPage, int amountArts);
    }
}
