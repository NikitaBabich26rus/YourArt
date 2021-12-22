using System.Collections.Generic;
using System.Threading.Tasks;
using YourArt.Models;

namespace YourArt.Services
{
    public interface IArtsService
    {
        Task<Arts> GetFirstArt();

        Task<Arts> GetArtById(int id);

        Task<IEnumerable<Arts>> GetPageContent(int currentPage, int amountArtsOnPage);

        Task<IEnumerable<SimilarArts>> GetSimilarArts();

        Task<IEnumerable<Arts>> GetArtsOfTheSameCity(string city, int currentPage, int amountArtsOnPage);
    }
}
