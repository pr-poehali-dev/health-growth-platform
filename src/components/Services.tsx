import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Apple",
      title: "Персональные планы питания",
      description:
        "Индивидуальные рационы с учетом ваших целей, предпочтений и ограничений",
      features: [
        "Расчет калорий",
        "Список покупок",
        "Рецепты",
        "Трекинг питания",
      ],
      color: "text-wellness-green-accent",
      bgColor: "bg-wellness-green-accent/10",
    },
    {
      icon: "Dumbbell",
      title: "Программы тренировок",
      description:
        "Персонализированные фитнес-программы для любого уровня подготовки",
      features: [
        "Видео-уроки",
        "Прогресс-трекинг",
        "Планы тренировок",
        "Домашние тренировки",
      ],
      color: "text-wellness-blue-accent",
      bgColor: "bg-wellness-blue-accent/10",
    },
    {
      icon: "Brain",
      title: "Медитация и осознанность",
      description:
        "Гайды по медитации, дыхательные практики и техники релаксации",
      features: [
        "Аудио-медитации",
        "Дыхательные упражнения",
        "Трекинг настроения",
        "Сон и восстановление",
      ],
      color: "text-wellness-purple",
      bgColor: "bg-wellness-purple/10",
    },
    {
      icon: "Sparkles",
      title: "Красота и уход",
      description: "Советы по уходу за кожей, волосами и общему внешнему виду",
      features: [
        "Skincare-рутины",
        "Анализ типа кожи",
        "Рекомендации продуктов",
        "Домашние процедуры",
      ],
      color: "text-wellness-coral-accent",
      bgColor: "bg-wellness-coral-accent/10",
    },
    {
      icon: "TrendingUp",
      title: "Личностный рост",
      description:
        "Онлайн-курсы и материалы для развития личности и достижения целей",
      features: [
        "Курсы развития",
        "Планирование целей",
        "Мотивационные материалы",
        "Трекинг привычек",
      ],
      color: "text-wellness-deep-mint",
      bgColor: "bg-wellness-deep-mint/10",
    },
    {
      icon: "Heart",
      title: "Мониторинг здоровья",
      description:
        "Отслеживание жизненно важных показателей и общего состояния здоровья",
      features: [
        "Показатели здоровья",
        "Интеграция с устройствами",
        "Медицинские напоминания",
        "Анализ данных",
      ],
      color: "text-wellness-green-accent",
      bgColor: "bg-wellness-green-accent/10",
    },
  ];

  return (
    <section className="py-20 px-4 bg-wellness-neutral">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wellness-deep-mint mb-4 font-open-sans">
            Комплексная wellness-платформа
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato">
            Все инструменты для здорового образа жизни, красоты и личностного
            развития в одном месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div
                  className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className={service.color}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-wellness-deep-mint mb-3 font-open-sans">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 font-lato">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-wellness-green-accent"
                      />
                      <span className="font-lato">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${service.color.replace("text-", "bg-")} hover:opacity-90 text-white font-medium`}
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-wellness-deep-mint to-wellness-purple p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4 font-open-sans">
              Готовы начать свой путь к лучшей версии себя?
            </h3>
            <p className="text-lg mb-6 opacity-90 font-lato">
              Получите персональный план развития на основе ваших целей и
              предпочтений
            </p>
            <Button
              size="lg"
              className="bg-white text-wellness-deep-mint hover:bg-gray-100 px-8 py-3 font-semibold"
            >
              <Icon name="Sparkles" className="mr-2" />
              Создать персональный план
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
