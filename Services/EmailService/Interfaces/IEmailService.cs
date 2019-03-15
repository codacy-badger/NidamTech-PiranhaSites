using System.Collections.Generic;

namespace Services.EmailService
{
    public interface IEmailService
    {
        void SendEmail(EmailMessage emailMessage);
        List<EmailMessage> ReceiveEmail(int maxCount = 10);
    }
}