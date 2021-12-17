using System.Collections.Generic;
using System.Threading.Tasks;
using YourArt.Models;

namespace YourArt.Services
{
    public interface IArtsStatisticsService
    {
        Task<IEnumerable<CityStatistics>> GetCitiesSalesStatistics();

        Task<List<TechiqueStatistics>> GetTechniques();

        Task<List<NationalityStatistics>> GetAuthorsNationality();

        Task<List<YearsOfSoldPictures>> GetYearsOfSoldPictures();

        Task<List<AuthorDeadOrAlive>> GetAuthorsDeadOrAliveStatistics();

        Task<List<AuthorsGender>> GetAuthorsGenderStatistics();
    }
}
