using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using YourArt.Models;
using YourArt.Services;

namespace YourArt.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArtsStatisticsController : ControllerBase
    {

        private readonly IArtsStatisticsService _artsStatisticsService;


        public ArtsStatisticsController(IArtsStatisticsService artsStatisticsService)
        {
            _artsStatisticsService = artsStatisticsService;
        }

        [HttpGet("getCities")]
        public async Task<IEnumerable<CityStatistics>> GetCitiesStatistics()
            => await _artsStatisticsService.GetCitiesSalesStatistics();

        [HttpGet("getTechniques")]
        public async Task<IEnumerable<TechiqueStatistics>> GetTechniquesStatistics()
            => await _artsStatisticsService.GetTechniques();

        [HttpGet("getAuthorsNationality")]
        public async Task<IEnumerable<NationalityStatistics>> GetAuthorsNationality()
            => await _artsStatisticsService.GetAuthorsNationality();

        [HttpGet("getYearsOfSoldPictures")]
        public async Task<IEnumerable<YearsOfSoldPictures>> GetYearsOfSoldPictures()
            => await _artsStatisticsService.GetYearsOfSoldPictures();

        [HttpGet("getGenderStatistics")]
        public async Task<IEnumerable<AuthorsGender>> GetGendersStatistics()
            => await _artsStatisticsService.GetAuthorsGenderStatistics();

        [HttpGet("getDeadOrAliveStatistics")]
        public async Task<IEnumerable<AuthorDeadOrAlive>> GetDeadOrAliveStatistics()
            => await _artsStatisticsService.GetAuthorsDeadOrAliveStatistics();
    }
}
