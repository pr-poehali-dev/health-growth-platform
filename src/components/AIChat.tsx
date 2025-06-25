import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const AIChat = () => {
  const messages = [
    {
      type: "ai",
      text: "Привет! Я ваш персональный AI-консультант по здоровью. Как дела с тренировками?",
      time: "14:32",
    },
    {
      type: "user",
      text: "Привет! Сегодня пробежал 5км, но чувствую усталость. Это нормально?",
      time: "14:35",
    },
    {
      type: "ai",
      text: "Отлично! 5км - это хороший результат. Усталость после бега нормальна. Рекомендую выпить воды и сделать растяжку. Хотите, составлю план восстановления?",
      time: "14:36",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-wellness-neutral to-wellness-mint">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-wellness-deep-mint">
              Ваш персональный
              <span className="text-wellness-purple block">AI-консультант</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Получайте мгновенные ответы на вопросы о здоровье, персональные
              рекомендации и поддержку 24/7
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Icon
                  name="CheckCircle"
                  className="text-wellness-green-accent"
                  size={20}
                />
                <span>Анализ ваших показателей здоровья</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Icon
                  name="CheckCircle"
                  className="text-wellness-green-accent"
                  size={20}
                />
                <span>Персональные планы тренировок</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Icon
                  name="CheckCircle"
                  className="text-wellness-green-accent"
                  size={20}
                />
                <span>Рекомендации по питанию</span>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="w-10 h-10 bg-gradient-to-r from-wellness-purple to-wellness-blue-accent rounded-full flex items-center justify-center">
                  <Icon name="Bot" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-wellness-deep-mint">
                    AI Консультант
                  </h3>
                  <p className="text-sm text-wellness-green-accent">● онлайн</p>
                </div>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-wellness-blue-accent text-white"
                          : "bg-wellness-neutral text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.type === "user"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Input
                  placeholder="Задайте вопрос о здоровье..."
                  className="flex-1"
                />
                <Button size="sm" className="btn-primary">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
