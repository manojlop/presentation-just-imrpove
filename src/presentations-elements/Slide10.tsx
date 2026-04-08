import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Slide10Content: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-4 py-3 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto space-y-3 sm:space-y-4">
        <div className="text-center space-y-1 sm:space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors">
            Kontaktirajte nas
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-white max-w-xl mx-auto px-2 transition-colors">
            Spremni ste za promenu? Javite nam se i saznajte kako JustImprove može da transformiše vašu proizvodnju
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Email Form */}
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-3 sm:p-4 transition-colors">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white transition-colors">Pošaljite nam poruku</h3>
            </div>

            <form className="space-y-2 sm:space-y-3">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="w-full px-2 sm:px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Vaše ime i prezime"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                  Email adresa
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="w-full px-2 sm:px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="vas@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                  Poruka
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  className="w-full px-2 sm:px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Kako vam možemo pomoći?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-xs sm:text-sm"
              >
                Pošalji poruku
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-3 sm:p-4 transition-colors">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white transition-colors">Kontakt informacije</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5 text-xs sm:text-sm transition-colors">Telefon</h4>
                  <a href="tel:+381601234567" className="text-blue-500 hover:text-blue-600 text-xs transition-colors">
                    +381 60 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5 text-xs sm:text-sm transition-colors">Email</h4>
                  <a href="mailto:info@justimprove.com" className="text-blue-500 hover:text-blue-600 text-xs transition-colors">
                    info@justimprove.com
                  </a>
                </div>
              </div>

              <div className="pt-2 sm:pt-3 border-t border-gray-200 dark:border-gray-700 transition-colors">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  Radno vreme: Ponedeljak - Petak, 9:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10Content;
