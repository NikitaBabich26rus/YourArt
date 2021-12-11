using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourArt.Repositories
{
    public class ArtsStatisticsRepository: IArtsStatisticsRepository
    {
        private readonly ArtsDbContext _context;

        public ArtsStatisticsRepository(ArtsDbContext context)
        {
            _context = context;
        }

        public async Task<List<string>> GetCitiesSales()
            => await _context.Arts
            .Select(x => x.City)
            .ToListAsync();
    }
}
