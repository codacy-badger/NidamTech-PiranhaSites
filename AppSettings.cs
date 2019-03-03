namespace nidam_corp
{
    public class AppSettings
    {
        public class AzStorage
        {
            public string ContainerName { get; set; }
            public string StorageKey { get; set; }
            public string StorageName { get; set; }
        }

        public AzStorage AzureStorage { get; set; }
        public string Secret { get; set; }
        public bool UseLocalDB { get; set; }
        public bool UseAzureStorage { get; set; }
    }
}