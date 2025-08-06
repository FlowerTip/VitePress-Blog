# NestJS 入门前置知识

## 1. IOC(Inversion of Control) 控制反转

通俗的解释是高层模块不应该依赖低层模块，二者都应该依赖其抽象，抽象不应该依赖细节，细节应该依赖抽象。

## 2. DI(Dependency Injection) 依赖注入

1. 与IOC是一套概念，因为控制反转的概念比较含糊，可能只是理解为容器控制对象这一个层面，很难让人想到谁来维护对象关系，所以2004年大师级人物Martin Fowler又给出了一个新的名字：依赖注入。 

2. `A`类依赖`B`类的常规表现是在`A`中使用`B`的实例化对象。

## 3.代码示例

1. 未使用控制反转和依赖注入思想的代码

    ```typescript
    class A  {
      name: string;
      constructor (name: string) {
        this.name = name;
      }
    }

    class B {
      age: number;
      aInstance: A; // ts中类名可以作为类型来使用
      constructor (age: number) {
        this.age = age;
        this.aInstance = new A("狗尾巴花的尖");
      }
    }

    const c = new B(18);

    const aName = c.aInstance.name;

    console.log(aName); // 打印结果：狗尾巴花的尖

    ```

  - 在上述代码中可以看到， `B`类中的代码实现是需要依赖`A`类的，两者的代码的耦合度非常高。
  - 出现的问题：
    - 当两者之间的业务逻辑复杂程度增加的情况下，维护成本与代码可读性都会随着增加，并且很难再多引入额外的模块进行功能拓展。



2. 为了解决`1`出现的问题，引入控制反转和依赖注入

    ```typescript
    class A {
      name: string;
      constructor (name: string) {
        this.name = name;
      }
    }

    class C {
      age: number;
      constructor (age: number) {
        this.age = age;
      }
    }

    // 定义一个中间类，用于收集类
    class Module {
      modules: Object; // 是一个对象
      constructor () {
        this.modules = {};
      }
      /**
       * 为模块收集器对象，提供对应的类(key)和实例化对象(module)
      */
      provide (key: string, module: Object) {
        this.modules[key] = module;
      }

      /**
       * 从模块收集器对象中获取对应类（key）的实例化对象(module)
      */
      get (key: string) {
        return this.modules[key];
      }
    }

    // 实例化模块收集器
    const module = new Module();

    // 为模块收集器提供2个类，A类和C类
    module.provide('A', new A('狗尾巴花的尖'));
    module.provide('C', new C(18));


    // 这里我们实现B类依赖A类， B类依赖C类 ...
    class B {
      aInstance: A;
      cInstance: C;
      constructor (module: Module) {
        this.aInstance = module.get('A');
        this.cInstance = module.get('C');
      }
    }

    // 实例化B类
    const b = new B(module);

    // 调用依赖项A类实例化对象的name和依赖项C类型实例化对象的age
    const aName = b.aInstance.name;
    const cAge = b.cInstance.age;

    console.log(aName, cAge); // 打印结果：狗尾巴花的尖，18

    ```

3. 其实就是写了一个中间件，来收集依赖，主要是为了解耦，减少维护成本。