import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-purple-100 to-green-100">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-orange-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🦫</span>
            <span className="text-2xl font-bold text-primary">BEAVER COIN</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors font-medium">О токене</a>
            <a href="#roadmap" className="hover:text-primary transition-colors font-medium">Roadmap</a>
            <a href="#memes" className="hover:text-primary transition-colors font-medium">Мемы</a>
            <a href="#buy" className="hover:text-primary transition-colors font-medium">Как купить</a>
            <a href="#community" className="hover:text-primary transition-colors font-medium">Сообщество</a>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90">
            Купить токен
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-bounce mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/edb571d2-5843-4675-a542-a4aebd96f11c/files/cf4ddb9b-b3ce-430f-bc29-77ffd17a541d.jpg" 
              alt="Beaver Mascot" 
              className="w-64 h-64 mx-auto rounded-full shadow-2xl"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-primary">
            BEAVER TO THE MOON! 🚀
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-foreground font-bold">
            Самый трудолюбивый мем-токен в крипте! 
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-xl px-8 py-6 bg-primary hover:bg-primary/90">
              <Icon name="Rocket" className="mr-2" size={24} />
              Купить $BEAVER
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
              <Icon name="Users" className="mr-2" size={24} />
              Присоединиться
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/70">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 text-primary">
            Почему BEAVER? 🦫
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-4 border-primary hover:shadow-2xl transition-all hover:-rotate-1">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">💪</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Трудолюбие</h3>
                <p className="text-lg">Бобры строят дамбы, мы строим твой портфель! Работаем 24/7 над ростом токена.</p>
              </CardContent>
            </Card>
            <Card className="border-4 border-secondary hover:shadow-2xl transition-all hover:rotate-1">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🌊</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Сообщество</h3>
                <p className="text-lg">Как бобры в колонии - мы вместе! Тысячи холдеров по всему миру.</p>
              </CardContent>
            </Card>
            <Card className="border-4 border-accent hover:shadow-2xl transition-all hover:-rotate-1">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Мемный потенциал</h3>
                <p className="text-lg">Бобры мемабельны! Огромный вирусный потенциал и мировое признание.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 text-primary">
            ROADMAP: Путь к Луне 🌕
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-l-8 border-primary bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">✅</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-primary">Q1 2024 - Запуск</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Создание токена и смарт-контракта</li>
                      <li>• Листинг на DEX</li>
                      <li>• Создание сообщества 10,000+ холдеров</li>
                      <li>• Первые мемы и вирусные кампании</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-8 border-secondary bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔥</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-secondary">Q2 2024 - Рост</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Листинг на CEX (Tier 2)</li>
                      <li>• Партнерства с инфлюенсерами</li>
                      <li>• NFT коллекция BEAVER GANG</li>
                      <li>• Достижение 50,000+ холдеров</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-8 border-accent bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-accent">Q3-Q4 2024 - Луна</h3>
                    <ul className="space-y-2 text-lg">
                      <li>• Листинг на топовых биржах (Binance, Coinbase)</li>
                      <li>• Запуск BEAVER DAO</li>
                      <li>• Мерч и физические товары</li>
                      <li>• Благотворительность - спасение настоящих бобров!</li>
                      <li>• 100,000+ холдеров и космос! 🌌</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="memes" className="py-20 px-4 bg-white/70">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 text-primary">
            Мемная Галерея 😂
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:scale-105 transition-transform border-4 border-secondary">
              <img 
                src="https://cdn.poehali.dev/projects/edb571d2-5843-4675-a542-a4aebd96f11c/files/570c4008-fa67-454b-a380-51fe5e3d559a.jpg" 
                alt="Beaver Meme 1" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4 text-center">
                <p className="font-bold text-xl">BEAVER В КОСМОСЕ! 🚀</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:scale-105 transition-transform border-4 border-primary">
              <img 
                src="https://cdn.poehali.dev/projects/edb571d2-5843-4675-a542-a4aebd96f11c/files/9cf5ec56-831e-4395-9e52-60a5351deb3a.jpg" 
                alt="Beaver Meme 2" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4 text-center">
                <p className="font-bold text-xl">СТРОИМ ДАМБУ ИЗ ДЕНЕГ! 💰</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:scale-105 transition-transform border-4 border-accent">
              <img 
                src="https://cdn.poehali.dev/projects/edb571d2-5843-4675-a542-a4aebd96f11c/files/cf4ddb9b-b3ce-430f-bc29-77ffd17a541d.jpg" 
                alt="Beaver Meme 3" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4 text-center">
                <p className="font-bold text-xl">КРУТОЙ BEAVER! 😎</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="buy" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-black text-center mb-12 text-primary">
            Как купить $BEAVER? 💸
          </h2>
          <Card className="border-4 border-primary bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Создай кошелек</h3>
                    <p className="text-lg">Скачай MetaMask или Trust Wallet - это твой крипто-кошелек!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Купи ETH или BNB</h3>
                    <p className="text-lg">Через биржу или прямо в кошельке - нужна крипта для обмена!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Обменяй на $BEAVER</h3>
                    <p className="text-lg">Зайди на Uniswap/PancakeSwap, подключи кошелек и обменяй на BEAVER!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">HOLD и наслаждайся! 🚀</h3>
                    <p className="text-lg">Теперь ты часть BEAVER GANG! Держи токены и лети на луну вместе с нами!</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t-4 border-primary">
                <Button className="w-full text-xl py-6 bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" className="mr-2" size={24} />
                  Купить на Uniswap
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="community" className="py-20 px-4 bg-white/70">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black mb-12 text-primary">
            Присоединяйся к BEAVER GANG! 🦫
          </h2>
          <p className="text-2xl mb-12">Стань частью самого мемного сообщества в крипте!</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" className="text-xl px-8 py-6 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90">
              <Icon name="Twitter" className="mr-2" size={24} />
              Twitter
            </Button>
            <Button size="lg" className="text-xl px-8 py-6 bg-[#0088cc] hover:bg-[#0088cc]/90">
              <Icon name="Send" className="mr-2" size={24} />
              Telegram
            </Button>
            <Button size="lg" className="text-xl px-8 py-6 bg-[#5865F2] hover:bg-[#5865F2]/90">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Discord
            </Button>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-primary mb-2">10K+</div>
              <div className="text-xl">Холдеров</div>
            </div>
            <div>
              <div className="text-5xl font-black text-secondary mb-2">$5M</div>
              <div className="text-xl">Рыночная капитализация</div>
            </div>
            <div>
              <div className="text-5xl font-black text-accent mb-2">1000%</div>
              <div className="text-xl">Рост с запуска</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-6xl mb-4">🦫</div>
          <h3 className="text-3xl font-bold mb-4">BEAVER COIN</h3>
          <p className="text-xl mb-6">Трудолюбивый путь к луне! 🚀</p>
          <p className="opacity-80">© 2024 Beaver Coin. Это мем-токен для развлечения. DYOR!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
