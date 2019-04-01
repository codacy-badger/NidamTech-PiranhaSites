using System.Collections.Generic;

namespace NidamTech.Services.EmailService.Interfaces
{
    public interface IEmailService
    {
        void SendEmail(EmailMessage emailMessage);
        List<EmailMessage> ReceiveEmail(int maxCount = 10);
    }
}