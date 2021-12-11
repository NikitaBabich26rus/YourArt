using Microsoft.EntityFrameworkCore;

namespace YourArt
{
    public partial class ArtsDbContext : DbContext
    {
        public ArtsDbContext(DbContextOptions<ArtsDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Arts> Arts { get; set; }

       /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=LAPTOP-2RNKVAHT\\SQLEXPRESS;Database=YourArts;Trusted_Connection=True;");
            }
        }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Cyrillic_General_CI_AS");

            modelBuilder.Entity<Arts>(entity =>
            {
                entity.ToTable("arts");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Art1)
                    .HasMaxLength(1637)
                    .IsUnicode(false)
                    .HasColumnName("Art");

                entity.Property(e => e.Auction)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Author)
                    .IsRequired()
                    .HasMaxLength(36)
                    .IsUnicode(false);

                entity.Property(e => e.CataloguingLength)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Century).HasColumnName("century");

                entity.Property(e => e.CircleOf).HasColumnName("circleOf");

                entity.Property(e => e.City)
                    .HasMaxLength(37)
                    .IsUnicode(false);

                entity.Property(e => e.Currency)
                    .IsRequired()
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfBirth)
                    .IsRequired()
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("date_of_birth");

                entity.Property(e => e.DateOfDeath).HasColumnName("date_of_death");

                entity.Property(e => e.DayOfWeek)
                    .IsRequired()
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("day_of_week");

                entity.Property(e => e.DealTimeUtc)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .HasColumnName("deal_time_utc");

                entity.Property(e => e.Description).HasColumnType("text");

                entity.Property(e => e.Feature1)
                    .HasMaxLength(22)
                    .IsUnicode(false)
                    .HasColumnName("feature1");

                entity.Property(e => e.Feature2)
                    .HasMaxLength(22)
                    .IsUnicode(false)
                    .HasColumnName("feature2");

                entity.Property(e => e.HasAfter).HasColumnName("hasAfter");

                entity.Property(e => e.HasFollowers).HasColumnName("hasFollowers");

                entity.Property(e => e.Image)
                    .HasMaxLength(155)
                    .IsUnicode(false);

                entity.Property(e => e.IsNumbered).HasColumnName("isNumbered");

                entity.Property(e => e.IsUntitled).HasColumnName("isUntitled");

                entity.Property(e => e.MannerOf).HasColumnName("mannerOf");

                entity.Property(e => e.Material)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Month).HasColumnName("month");

                entity.Property(e => e.Nationality)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("nationality");

                entity.Property(e => e.NormalizedEstimatefrom)
                    .HasColumnType("numeric(11, 2)")
                    .HasColumnName("normalized_estimatefrom");

                entity.Property(e => e.NormalizedEstimateto)
                    .HasColumnType("numeric(12, 2)")
                    .HasColumnName("normalized_estimateto");

                entity.Property(e => e.NormalizedPrice)
                    .HasColumnType("numeric(12, 2)")
                    .HasColumnName("normalized_price");

                entity.Property(e => e.NumberOfDay).HasColumnName("number_of_day");

                entity.Property(e => e.Owner)
                    .IsRequired()
                    .HasMaxLength(264)
                    .IsUnicode(false);

                entity.Property(e => e.RepeatSale).HasColumnName("repeat_sale");

                entity.Property(e => e.SaleDate)
                    .HasColumnType("date")
                    .HasColumnName("sale_date");

                entity.Property(e => e.Sex)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("sex");

                entity.Property(e => e.Size)
                    .IsRequired()
                    .HasMaxLength(21)
                    .IsUnicode(false);

                entity.Property(e => e.SquareM)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("square_m");

                entity.Property(e => e.Style)
                    .IsRequired()
                    .HasMaxLength(28)
                    .IsUnicode(false)
                    .HasColumnName("style");

                entity.Property(e => e.Technique)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.Time)
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.TriedUrl)
                    .IsRequired()
                    .HasMaxLength(232)
                    .IsUnicode(false)
                    .HasColumnName("tried_url");

                entity.Property(e => e.Year).HasColumnName("year");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
