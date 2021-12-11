using System.Threading.Tasks;
using YourArt.Repositories;

namespace YourArt.Services
{
    public class ArtsStatisticsService: IArtsStatisticsService
    {
        private readonly IArtsStatisticsRepository _artsStatisticsRepository;

        public ArtsStatisticsService(IArtsStatisticsRepository artsStatisticsRepository)
        {
            _artsStatisticsRepository = artsStatisticsRepository;
        }

        public async Task GetCitiesSalesStatistics()
        {
            var result = await _artsStatisticsRepository.GetCitiesSales();
        }
    }
}
