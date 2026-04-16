# React 等框架使用示例

## 1. 直接在 HTML 中引入（通用方法）

```html
<!-- 在 public/index.html 中添加 -->
<script src="https://duiliuliu.github.io/sponsor-page/embed.js"></script>

<!-- 可选：添加配置 -->
<script>
  window.PlayingRewardConfig = {
    position: 'bottom-right',
    noText: false,
    // 其他配置...
  };
</script>
```

## 2. 在 React 组件中使用

### 方法一：通过 useEffect 动态加载

```tsx
import React, { useEffect } from 'react';

const SponsorComponent: React.FC = () => {
  useEffect(() => {
    // 配置
    (window as any).PlayingRewardConfig = {
      position: 'bottom-right',
      noText: false,
    };

    // 加载脚本
    const script = document.createElement('script');
    script.src = 'https://duiliuliu.github.io/sponsor-page/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 清理
      document.body.removeChild(script);
      // 可选：移除创建的元素
      const sponsorElements = document.querySelectorAll('.playing-reward, #QRBox');
      sponsorElements.forEach(el => el.remove());
    };
  }, []);

  return null;
};

export default SponsorComponent;
```

### 方法二：创建自定义 Hook

```tsx
import { useEffect } from 'react';

interface PlayingRewardConfig {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  noText?: boolean;
  githubLink?: string;
  paypalLink?: string;
  kofiLink?: string;
  aliPayQR?: string;
  weChatQR?: string;
}

export const useSponsor = (config?: PlayingRewardConfig) => {
  useEffect(() => {
    if (config) {
      (window as any).PlayingRewardConfig = config;
    }

    const script = document.createElement('script');
    script.src = 'https://duiliuliu.github.io/sponsor-page/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const sponsorElements = document.querySelectorAll('.playing-reward, #QRBox');
      sponsorElements.forEach(el => el.remove());
    };
  }, [config]);
};

// 使用
const MyComponent: React.FC = () => {
  useSponsor({
    position: 'bottom-right',
    noText: true,
  });

  return <div>My Component</div>;
};
```

## 3. 在 TypeScript 项目中使用

### 添加类型定义

```typescript
// types.d.ts
declare interface PlayingRewardConfig {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  noText?: boolean;
  githubLink?: string;
  paypalLink?: string;
  kofiLink?: string;
  aliPayQR?: string;
  weChatQR?: string;
}

declare interface Window {
  PlayingRewardConfig?: PlayingRewardConfig;
}
```

## 4. 紧凑模式使用示例

### React 中使用紧凑模式

```tsx
import React, { useEffect } from 'react';

const CompactSponsor: React.FC = () => {
  useEffect(() => {
    (window as any).PlayingRewardConfig = {
      position: 'bottom-right',
      noText: true, // 启用紧凑模式
    };

    const script = document.createElement('script');
    script.src = 'https://duiliuliu.github.io/sponsor-page/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const sponsorElements = document.querySelectorAll('.playing-reward, #QRBox');
      sponsorElements.forEach(el => el.remove());
    };
  }, []);

  return null;
};

export default CompactSponsor;
```

### 自定义容器中使用

```tsx
import React, { useEffect, useRef } from 'react';

const ToolbarSponsor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://duiliuliu.github.io/sponsor-page/?no-text=1';
      iframe.title = 'Sponsor Page';
      iframe.style.minWidth = '100%';
      iframe.style.minHeight = '100%';
      iframe.frameBorder = '0';
      iframe.scrolling = 'no';

      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: '110px', 
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  );
};

export default ToolbarSponsor;
```

## 5. 注意事项

1. **DOM 操作**：embed.js 使用原生 DOM 操作创建元素，在 React 中使用时需要注意清理
2. **单例模式**：建议在应用入口处只加载一次
3. **样式冲突**：如果出现样式冲突，可以通过 CSS 选择器优先级解决
4. **加载时机**：确保在 DOM 加载完成后再加载脚本

## 6. 优势

- **零依赖**：纯原生 JavaScript 实现，无外部依赖
- **易于集成**：一行代码即可集成
- **高度可配置**：支持多种配置选项
- **响应式设计**：自动适应不同屏幕尺寸
- **紧凑模式**：支持在狭窄空间中使用

现在 embed.js 已经完全支持在 React、Vue、Angular 等框架中使用！