using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using YourArt.Services;

namespace YourArt.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArtsController : ControllerBase
    {
        private readonly IArtsService _artsService;
        private const int _amountArtsOnPage = 8;

        public ArtsController(IArtsService artsService)
        {
            _artsService = artsService;
        }

        [HttpGet]
        public async Task<Arts> GetFirstArt()
            => await _artsService.GetFirstArt();

        [HttpGet("getArt/{id}")]
        public async Task<Arts> GetArtById(int id)
            => await _artsService.GetArtById(id);

        [HttpGet("getArtsPage/{currentPage}")]
        public async Task<IEnumerable<Arts>> GetPageContent(int currentPage)
            => await _artsService.GetPageContent(currentPage, _amountArtsOnPage);
    }
}
