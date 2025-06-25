import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-wellness-mint to-wellness-neutral py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-wellness-deep-mint leading-tight">
              Ваше здоровье —
              <span className="text-wellness-purple block">наш приоритет</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Персональная платформа для трекинга фитнеса, мониторинга здоровья
              и достижения ваших целей с помощью AI-консультанта
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-wellness-green-accent hover:bg-wellness-green-accent/90 text-white px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" />
                Начать бесплатно
              </Button>
              <Button
                variant="outline"
                className="border-wellness-deep-mint text-wellness-deep-mint hover:bg-wellness-deep-mint hover:text-white px-8 py-3 text-lg"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Чат с AI
              </Button>
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="relative animate-scale-in">
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-wellness-deep-mint">
                    Ваш прогресс сегодня
                  </h3>
                  <div className="flex items-center gap-2 text-wellness-green-accent">
                    <Icon name="TrendingUp" size={20} />
                    <span className="font-semibold">+12%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Калории сожжены</span>
                      <span className="font-semibold">1,240 / 1,500</span>
                    </div>
                    <Progress value={83} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Шаги</span>
                      <span className="font-semibold">8,420 / 10,000</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Время тренировок</span>
                      <span className="font-semibold">45 / 60 мин</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-wellness-blue-accent">
                      7
                    </div>
                    <div className="text-xs text-gray-600">дней подряд</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-wellness-coral-accent">
                      24
                    </div>
                    <div className="text-xs text-gray-600">достижений</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-wellness-green-accent">
                      92%
                    </div>
                    <div className="text-xs text-gray-600">точность</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
