using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourArt.Models;
using YourArt.Repositories;

namespace YourArt.Services
{
    public class ArtsStatisticsService : IArtsStatisticsService
    {
        private readonly IArtsStatisticsRepository _artsStatisticsRepository;

        public ArtsStatisticsService(IArtsStatisticsRepository artsStatisticsRepository)
        {
            _artsStatisticsRepository = artsStatisticsRepository;
        }

        public async Task<IEnumerable<CityStatistics>> GetCitiesSalesStatistics()
        {
            var cities = (await _artsStatisticsRepository.GetCitiesSales()).Select(t => SetString(t));
            var uniqueCities = cities.Select(c => SetString(c)).Distinct();
            return uniqueCities.Select(city =>
            {
                var numberOfCityRepetitions = cities.Count(x => x == city) + 1;

                var cityStatistics = new CityStatistics();
                cityStatistics.City = city;
                cityStatistics.Amount = numberOfCityRepetitions;

                return cityStatistics;
            }).ToList();
        }

        public async Task<List<TechiqueStatistics>> GetTechniques()
        {
            var techniques = (await _artsStatisticsRepository.GetTechniques()).Select(t => SetString(t));
            var uniqueTechniques = techniques.Distinct();
            return uniqueTechniques.Select(t =>
            {
                var numberOfTechniquesRepetitions = techniques.Count(x => x == t) + 1;

                var techniqueStatistics = new TechiqueStatistics();
                techniqueStatistics.Technique = t;
                techniqueStatistics.Amount = numberOfTechniquesRepetitions;

                return techniqueStatistics;
            }).ToList();
        }

        public async Task<List<NationalityStatistics>> GetAuthorsNationality()
        {
            var authors = (await _artsStatisticsRepository.GetAuthorsNationality())
                .Select(x => (SetString(x)));
            var uniqueAuthors = authors.Distinct();

            return uniqueAuthors.Select(t =>
            {
                var numberOfAuthorsRepetitions = authors.Count(x => x == t) + 1;

                var nationalityStatistics = new NationalityStatistics();
                nationalityStatistics.Nationality = t;
                nationalityStatistics.Amount = numberOfAuthorsRepetitions;

                return nationalityStatistics;
            }).OrderBy(x => x.Amount).ToList();
        }

        public async Task<List<YearsOfSoldPictures>> GetYearsOfSoldPictures()
        {
            var years = await _artsStatisticsRepository.GetYearsOfSoldPictures();
            var uniqueYears = years.Distinct();

            return uniqueYears.Select(y =>
            {
                var numberOfYearRepetitions = years.Count(x => x == y) + 1;
                var yearOfSoldPicture = new YearsOfSoldPictures();
                yearOfSoldPicture.Year = y;
                yearOfSoldPicture.Amount = numberOfYearRepetitions;
                return yearOfSoldPicture;

            }).OrderBy(x => x.Year).ToList();
        }

        public async Task<List<AuthorsGender>> GetAuthorsGenderStatistics()
        {
            var genders = await _artsStatisticsRepository.GetGender();
            var uniqueGender = genders.Distinct();
            return uniqueGender.Select(y =>
            {
                var numberOfGenders = genders.Count(gender => gender == y) + 1;
                var authorGender = new AuthorsGender();
                authorGender.Gender = y == "F" ?
                    "Female" :
                    "Male";
               
                authorGender.Amount = numberOfGenders;
                return authorGender;

            }).ToList();
        }

        public async Task<List<AuthorDeadOrAlive>> GetAuthorsDeadOrAliveStatistics()
        {
            var deadOrAlives = (await _artsStatisticsRepository.GetLiveOrDead())
                .Select(x => x == null);
            var uniqueDeadOrAlives = deadOrAlives.Distinct();
            return uniqueDeadOrAlives.Select(y =>
            {
                var numberOfGenders = deadOrAlives.Count(gender => gender == y) + 1;
                var authorGender = new AuthorDeadOrAlive();
                authorGender.DeadOrAlive = y ?
                    "Dead" :
                    "Alive";

                authorGender.Amount = numberOfGenders;
                return authorGender;

            }).ToList();
        }

        private string SetString(string value)
        {
            if (value == null || value == "-")
            {
                return "Not stated";
            }
            return String.Join(" ", value.Split(' ')
                    .Select(word => word.Substring(0, 1).ToUpper() + word.Substring(1, word.Length - 1).ToLower()));
        }
    }
}
