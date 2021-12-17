using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourArt.Repositories
{
    public class ArtsStatisticsRepository : IArtsStatisticsRepository
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

        public async Task<List<string>> GetAuthorsNationality()
            => await _context.Arts
            .Select(x => x.Nationality)
            .ToListAsync();

        public async Task<List<int>> GetYearsOfSoldPictures()
            => await _context.Arts
            .Select(x => x.Year)
            .ToListAsync();

        public async Task<List<string>> GetTechniques()
            => await _context.Arts
            .Select(x => x.Technique)
            .ToListAsync();

        public async Task<List<string>> GetGender()
            => await _context.Arts
            .Select(x => x.Sex)
            .ToListAsync();

        public async Task<List<int?>> GetLiveOrDead()
            => await _context.Arts
            .Select(x => x.DateOfDeath)
            .ToListAsync();
    }
}
