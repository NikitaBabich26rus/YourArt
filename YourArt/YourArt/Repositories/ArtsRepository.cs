using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourArt.Repositories
{
    public class ArtsRepository : IArtsRepository
    {
        private readonly ArtsDbContext _context;

        public ArtsRepository(ArtsDbContext context)
        {
            _context = context;
        }

        public async Task<Arts> GetFirstArt()
            => await _context.Arts.FirstOrDefaultAsync();

        public async Task<Arts> GetArtById(int id)
            => await _context.Arts.FirstOrDefaultAsync(art => art.Id == id);

        public async Task<List<Arts>> GetPageContent(int currentPage, int amountArtsOnPage)
            => await _context.Arts
            .OrderBy(art => art.Id)
            .Skip((currentPage - 1) * amountArtsOnPage)
            .Take(amountArtsOnPage)
            .ToListAsync();
    }
}
