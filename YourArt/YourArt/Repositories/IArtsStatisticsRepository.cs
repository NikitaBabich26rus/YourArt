using System.Collections.Generic;
using System.Threading.Tasks;

namespace YourArt.Repositories
{
    public interface IArtsStatisticsRepository
    {
        Task<List<string>> GetCitiesSales();

        Task<List<string>> GetTechniques();

        Task<List<string>> GetAuthorsNationality();

        Task<List<int>> GetYearsOfSoldPictures();

        Task<List<string>> GetGender();

        Task<List<int?>> GetLiveOrDead();
    }
}
