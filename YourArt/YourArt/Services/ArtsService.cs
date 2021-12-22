using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourArt.Models;
using YourArt.Repositories;

namespace YourArt.Services
{
    public class ArtsService : IArtsService
    {
        private readonly IArtsRepository _artsRepository;

        public ArtsService(IArtsRepository artsRepository)
        {
            _artsRepository = artsRepository;
        }

        public async Task<Arts> GetFirstArt()
            => await _artsRepository.GetFirstArt();

        public async Task<Arts> GetArtById(int id)
        {
            var art = await _artsRepository.GetArtById(id);
            art.Author = SetAuthorName(art.Author);
            return art;
        }

        public async Task<IEnumerable<Arts>> GetPageContent(int currentPage, int amountArtsOnPage)
        {
            var arts = await _artsRepository.GetPageContent(currentPage, amountArtsOnPage);
            arts.ForEach(art =>
            {
                art.Author = SetAuthorName(art.Author);
            });
            return arts;
        }

        public async Task<IEnumerable<SimilarArts>> GetSimilarArts()
            => (await _artsRepository.GetSimilarArts())
            .Select(x => new SimilarArts(x.Id, x.Art1));

        public async Task<IEnumerable<Arts>> GetArtsOfTheSameCity(string city, int currentPage, int amountArtsOnPage)
            => await _artsRepository.GetArtsOfTheSameCity(city, currentPage, amountArtsOnPage);

        private string SetAuthorName(string authorName)
            => String.Join(" ", authorName.Split(' ')
                    .Select(word => word.Substring(0, 1).ToUpper() + word.Substring(1, word.Length - 1).ToLower()));
    }
}
