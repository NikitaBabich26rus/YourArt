namespace YourArt.Models
{
    public class SimilarArts
    {
        public int Id { get; set; }

        public string ArtName { get; set; }

        public SimilarArts(int id, string artName)
        {
            ArtName = artName;
            Id = id;
        }
    }
}
