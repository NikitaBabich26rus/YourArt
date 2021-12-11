using System.Collections.Generic;
using System.Threading.Tasks;

namespace YourArt.Repositories
{
    public interface IArtsStatisticsRepository
    {
        Task<List<string>> GetCitiesSales();
    }
}
