import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Activity",
      title: "Трекинг прогресса",
      description:
        "Отслеживайте калории, шаги, пульс и все важные показатели здоровья в режиме реального времени",
      color: "text-wellness-green-accent",
    },
    {
      icon: "Smartphone",
      title: "Интеграция с устройствами",
      description:
        "Синхронизация с популярными фитнес-трекерами и приложениями для здоровья",
      color: "text-wellness-blue-accent",
    },
    {
      icon: "Bot",
      title: "AI-консультант",
      description:
        "Персональные рекомендации и ответы на вопросы о здоровье от искусственного интеллекта",
      color: "text-wellness-purple",
    },
    {
      icon: "Users",
      title: "Сообщество",
      description:
        "Делитесь достижениями, находите единомышленников и мотивируйте друг друга",
      color: "text-wellness-coral-accent",
    },
    {
      icon: "Trophy",
      title: "Система достижений",
      description:
        "Зарабатывайте награды и отслеживайте прогресс на пути к поставленным целям",
      color: "text-wellness-green-accent",
    },
    {
      icon: "Calendar",
      title: "Планирование",
      description:
        "Персональный календарь тренировок и планов питания с умными напоминаниями",
      color: "text-wellness-blue-accent",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wellness-deep-mint mb-4">
            Всё для вашего здоровья в одном месте
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексная платформа с передовыми технологиями для достижения ваших
            фитнес-целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-wellness-neutral animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br from-wellness-mint to-wellness-neutral flex items-center justify-center ${feature.color}`}
                >
                  <Icon name={feature.icon as any} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-wellness-deep-mint">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
